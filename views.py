from flask import Blueprint, render_template

myapp = Blueprint(
    "myapp",
    __name__,
    template_folder="templates",
    static_folder="static"
)

@myapp.route("/")
def index():
    return render_template("index.html")

@myapp.route("/index2", methods=["GET", "POST"], endpoint="index2")
def index2():
    return render_template("index2.html")

@myapp.route("/new/advertising", methods=["GET", "POST"], endpoint="advertising")
def advertising():
    return render_template("advertising.html")

@myapp.route("/new/composition", methods=["GET", "POST"], endpoint="composition")
def composition():
    return render_template("composition.html")

@myapp.route("/new/knowledge_channel", methods=["GET", "POST"], endpoint="knowledge_channel")
def knowledge_channel():
    return render_template("knowledge_channel.html")

@myapp.route("/new/motion_graphics", methods=["GET", "POST"], endpoint="motion_graphics")
def motion_graphics():
    return render_template("motion_graphics.html")

@myapp.route("/new/animation", methods=["GET", "POST"], endpoint="animation")
def animation():
    return render_template("animation.html")

@myapp.route("/new/Gucci", methods=["GET", "POST"], endpoint="Gucci")
def Gucci():
    return render_template("Gucci.html")
