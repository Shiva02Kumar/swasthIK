from fastapi import FastAPI
import pickle

model = pickle.load(open("\\mlModels\\Logistic Regression.sav", 'rb')),


# model = load.pkl

app = FastAPI()

@app.post('/')
# async def modelPredict(input_data: InputData):
async def modelPredict():
    # features = [input_data.feature1, input_data.feature2]
    # prediction = model.predict(features)
    
    return {"prediction":" prediction"}



