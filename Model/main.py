from fastapi import FastAPI
import joblib
import numpy as np

model = joblib.load('random_forest_model2.joblib')


app = FastAPI()
@app.get('/')
def index():
    return{'message':'hello world'}

@app.get('/kirtan')
def i():
    return {'message':'my name is kirtan'}


@app.post("/predict")
def predict(request: list):

    input_data = np.array(request).reshape(1, -1)
    
    prediction = model.predict(input_data)
    return {"prediction": prediction[0]}

@app.post("/predict_day")

def predict(request: list):
    input_data = np.array(request)
    
    prediction = model.predict(input_data)
    average=prediction.mean() 
    min_load=min(prediction)
    max_load=max(prediction)
    return {"prediction": prediction.tolist(),'average':average,'min_load':min_load,'max_load':max_load}