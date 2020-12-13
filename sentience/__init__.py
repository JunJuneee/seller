from flask import Flask
from sentience.config import Config



def create_app(config_class=Config):
  app = Flask(__name__)
  app.config.from_object(Config)

  from sentience.main.routes import main
  app.register_blueprint(main)

  return app


