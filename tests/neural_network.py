import tensorflow as tf
import numpy as np


model = tf.keras.Sequential([
    tf.keras.layers.Dense(64, activation='relu', input_shape=(6,)),
    tf.keras.layers.Dense(64, activation='relu'),
    tf.keras.layers.Dense(1, activation='sigmoid')
])
model.load_weights('trained_model.h5')

predictions = model.predict(np.array([[0.     , 0.67   , 0.     , 1.     , 0.22869, 0.366  ]]))
print(predictions[0][0]*1000)

predictions = model.predict(np.array([[1.     , 0.44   , 0.     , 1.     , 0.08528, 0.262  ]]))
print(predictions[0][0]*1000)