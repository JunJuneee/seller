from pytrends.request import TrendReq
import requests
import xmltodict



def country_db(hs_code,country):
  #  국가 데이터베이스 api url
  key = '0UcTx4%2BAGfQ20JYbLza3S24f6vlgfDY1UCPQ5pPcoGfJiXb0JoJ2FdO4VbTYZ8raMMIVXSOKmindOom22qRHbA%3D%3D'
  url = 'http://openapi.customs.go.kr/openapi/service/newTradestatistics/getNitemtradeList?ServiceKey={}'.format(key)
  queryParams = '&searchBgnDe=201909&searchEndDe=202010&searchItemCd='+hs_code+ '&searchStatCd='+ country
  url = url + queryParams

  # 데이터를 파싱 후 그래프를 만들기 위해 리스트로 바꿔준다. 국가별 수출 그래프
  content = requests.get(url).content
  xml = xmltodict.parse(content) 
  year_list = [x['year'][2:] for x in xml['response']['body']['items']['item']][:-1]
  exports_list = [int(x['balPayments']) for x in xml['response']['body']['items']['item']]
  amount_list = [int(x['expWgt']) for x in xml['response']['body']['items']['item']]
  combined_list =list(map(list, zip(year_list,exports_list,amount_list))) 
  combined_list.insert(0,['Year', 'Sales', 'Amount'])

  return combined_list


def google_trends(country,keyword):
  # 구글 트렌드 api
  pytrend = TrendReq(geo=country)
  pytrend.build_payload(kw_list=[keyword], timeframe='today 12-m')
  data = pytrend.interest_over_time()

  if data.empty is True:
    google_list = []
  
  else:
    # 데이터를 가져온 후 그래프를 만들기 위해 리스트로 바꿔준다. 구글 트랜드 키워드 관련 그래프
    date = [str(x)[2:7].replace('-','.') for x in data.index.tolist()]
    key_word_value = [x for x in data[keyword]]
    google_list = list(map(list, zip(date,key_word_value)))[2:-1]
    google_list.insert(0,['Year', 'Interest'])

  return google_list

def related_queries(country,keyword):
  pytrend = TrendReq(geo=country)
  pytrend.build_payload(kw_list=[keyword], timeframe='today 12-m')
  data = pytrend.interest_over_time()
  google_trend = pytrend.related_queries()[keyword]['rising']
  #이상한 단어 검색 필터
  if google_trend is None:
    related_queries_list = []  
  else:
    related_queries = [x for x in google_trend['query']]
    values = [x for x in google_trend['value']]
    related_queries_list = list(map(list, zip(related_queries,values)))[:8]

  return related_queries_list
  