import pandas as pd
import quandl
import math
df = quandl.get('WIKI/GOOGL')
df = df[['Adj. Open', 'Adj. High', 'Adj. Close', 'Adj. Volume',]]
df['HL_PCT'] = (df['Adj. High'] -  df['Adj. Close']) / df['Adj. Close'] * 100.0 # rate for highest point distance to close rate respect to close.
df['PCT_change'] = (df['Adj. Close'] - df['Adj. Open']) / df['Adj. Open'] * 100.0 # rate for difference between Close & Open respect to open.
df = df[['Adj. Close', 'HL_PCT', 'PCT_change', 'Adj. Volume']]


forecast_col = 'Adj. Close'

df.fillna(-99999, inplace=True) # we are filling empty sections in out data, in machine learning you can not run training with empty data sets. so instead of deleting those columns or rows. we are placing a data.

forecast_out = int(math.ceil(0.1*len(df)))i

df['label'] = df[forecast_col]


