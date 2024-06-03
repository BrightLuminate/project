from flask import Flask, redirect, url_for

def create_app():
    app = Flask(__name__)

    from myapp.views import myapp
    app.register_blueprint(myapp, url_prefix="/myapp")

    @app.route('/')
    def root():
        return redirect(url_for('myapp.index'))

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
