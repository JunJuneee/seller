from sentience import app
from sentience.utils import country_db, google_trends, related_queries
from flask import render_template, redirect, url_for, request
from sentience.forms import FindProduct


@app.route("/",methods=['GET', 'POST'])
def home():
  form = FindProduct()
  if form.validate_on_submit():
    # hs_code가 3글자면 4글자로 만든다.
    hs_code = form.product_type.data if len(form.product_type.data)  >= 4 else '0'+ form.product_type.data
    country = form.country.data
    keyword = form.key_word.data
    return redirect(url_for('graph',hs_code=hs_code,country=country,keyword=keyword))

  return render_template('index.html',form=form )


@app.route('/graph/<hs_code>/<country>/<keyword>',methods=['GET','POST'])
def graph(hs_code,country,keyword):
  data_list1 = country_db(hs_code,country)
  data_list2 = google_trends(country,keyword)
  data_list3 = related_queries(country,keyword)

  return render_template('graph.html',data_list1=data_list1,data_list2=data_list2,data_list3=data_list3,keyword=keyword)
