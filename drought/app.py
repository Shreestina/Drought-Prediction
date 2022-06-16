from flask import Flask, request, jsonify,  render_template
import pickle
import pandas as pd
import numpy as np
import gzip, pickle, pickletools
#from pyrsistent import PSet


app = Flask(__name__)

with gzip.open("RF_classifier.pkl", 'rb') as f:
    p = pickle.Unpickler(f)
    model = p.load()

#model = pickle.load(open("RF_classifier.pkl","rb"))
#model = pickle.load(open("RF_classifier6.pkl","rb"))

sc= pickle.load(open("RF_classifier_sc.pkl", "rb"))



@app.route('/index')
def index():
    return render_template("index.html")

@app.route('/home')
def home():
    return render_template("home.html")
    
@app.route('/Landing')
def Landing():
    return render_template("prediction.html")

@app.route('/Distribution')
def Distribution():
    return render_template("distribution.html")

@app.route('/Correlation')
def Correlation():
    return render_template("correlation.html")

@app.route('/Scatter')
def Scatter():
    return render_template("scatter.html")

@app.route('/Model')
def Model():
    return render_template("model.html")

@app.route('/Class')
def Class():
    return render_template("class.html")

@app.route('/predict', methods=['POST', 'GET'])

      
def predict():
      PS = request.form['1']
      T2MDEW = request.form['2']
      T2M_MAX = request.form['3']
      T2M_RANGE = request.form['4']
      TS = request.form['5']
      WS50M= request.form['6']

      row_df=np.array([PS, T2MDEW, T2M_MAX, T2M_RANGE, TS, WS50M])

      row_sc_df = sc.transform(row_df.reshape(1, -1))

     
      print(row_sc_df) 
      prediction=model.predict(row_sc_df.reshape(1, -1))

 
      output = prediction[0]
      print(output)

      return render_template('prediction.html', prediction_text=output)


     
    #   if output == int(0):
    #         return render_template('prediction.html', prediction_text=" The drought category is {} indicates there is no drought".format(output))

    #   elif output == int(1):
    #               return render_template('prediction.html', prediction_text=" The drought category is D0, which indicates it is abnormally dry".format(output))
    #   elif output == int(2):
    #               return render_template('prediction.html', prediction_text=" The drought category is D1, which indicates moderate drought".format(output))
    #   elif output == int(3):
    #               return render_template('prediction.html', prediction_text=" The drought category is D2, which indicates severe drought".format(output))
    #   elif output == int(4):
    #               return render_template('prediction.html', prediction_text=" The drought category is D3, which indicates extreme drought".format(output))
    #   else:
    #         return render_template('prediction.html', prediction_text=" The drought category is D4, which indicates exceptional drought".format(output))
      
@app.route("/")
def welcome():
    return (
        f"Welcome to the Drought Prediction Tool<br/>"
        f"Available Routes:<br/>"
        f"/index"
    )      



         
if __name__ == '__main__':
    app.run(debug=True)
