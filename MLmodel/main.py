from fastapi import FastAPI
import pickle

algorithms = {'Logistic Regression': 
              {"model": pickle.load(open("\\mlModels\\Logistic Regression.sav", 'rb'))},
              
              'Decision Tree': 
              {"model": pickle.load(open("MLmodel\\mlModels\\Decision Tree.sav", 'rb'))},
              
              'Random Forest': 
              {"model": pickle.load(open("MLmodel\\mlModels\\Random Forest.sav", 'rb'))},
              
              'SVM':
              {"model": pickle.load(open("MLmodel\\mlModels\\SVM.sav", 'rb'))},
              
              'NaiveBayes' :
              {"model": pickle.load(open("MLmodel\\mlModels\\NaiveBayessav", 'rb'))},
              
              'K-Nearest Neighbors' :
              {"model": pickle.load(open("MLmodel\\mlModels\\K-Nearest Neighbors.sav", 'rb'))},
             }



# model = load.pkl

app = FastAPI()

@app.post('/')
# async def modelPredict(input_data: InputData):
async def modelPredict():
    # features = [input_data.feature1, input_data.feature2]
    # prediction = model.predict(features)
    
    return {"prediction":" prediction"}



