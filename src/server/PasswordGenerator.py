from  PasgeneratION import password
from flask import Flask , redirect, request, json, url_for
from flask_restful import Api, Resource
# with this we crete the app
app = Flask(__name__)

#page for receive data


@app.route("/password", methods=['GET', 'POST'])
def home():
	if request.method =='POST':
		request_data = json.loads(request.data)
		size_input = request_data['content']
		return {'result':password(size_input)}

# this is for run the app yeah just for run
if __name__== "__main__":
	app.run(debug=True)