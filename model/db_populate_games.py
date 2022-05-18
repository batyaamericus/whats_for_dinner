import pandas as pd
from sqlalchemy import create_engine
from sqlalchemy import text
import config
from tqdm.auto import tqdm


df = pd.read_csv('nba_elo.csv')
as_datetime = pd.to_datetime(df['date'])
date_bound = pd.Timestamp('2010-01-01 00:00:00')
df.loc[:, 'date_as_dt'] = as_datetime
df.drop('date', axis=1)
df = df[df['date_as_dt'] > date_bound]
df = df.reset_index().drop('index', axis=1)

engine = create_engine(config.engine_url, future=True)
cols = ['team1', 'team2', 'date']

with engine.connect() as conn:
    for i in tqdm(range(df.shape[0])):
        game_id = ''.join([df.loc[i, col] for col in cols])
        team_1 = df.loc[i, 'team1']
        team_2 = df.loc[i, 'team2']
        date = df.loc[i, 'date']

        stmt = f'''INSERT INTO games (game_id, team_1, team_2, date) VALUES ('{game_id}', '{team_1}', '{team_2}', '{date}')'''
        print(stmt)
        conn.execute(text(stmt))
        conn.commit()
