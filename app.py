from flask import Flask

def create_app() :

    app = Flask(__name__)

    from myapp import views
    app.register_blueprint(views.myapp, url_prefix="/myapp")
  
    return app