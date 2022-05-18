import pandas as pd
from sqlalchemy import create_engine
from sqlalchemy import text
import config
from tqdm.auto import tqdm


df = pd.read_csv('initial_preds.csv')
engine = create_engine(config.engine_url, future=True)

with engine.connect() as conn:
    for i in tqdm(range(df.shape[0])):
        game_id = df.loc[i, 'uid']
        teamName = df.loc[i, 'team1']
        our_prediction = df.loc[i, 'prob1']

        stmt = f'''INSERT INTO bets (game_id, teamName, our_prediction) VALUES ('{game_id}', '{teamName}', '{our_prediction}')'''
        print(stmt)
        conn.execute(text(stmt))
        conn.commit()
