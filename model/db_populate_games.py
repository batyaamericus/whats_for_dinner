import pandas as pd
from sqlalchemy import create_engine
from sqlalchemy import text
import config
from tqdm.auto import tqdm


df = pd.read_csv('x_test_preds.csv')

engine = create_engine(config.engine_url, future=True)
cols = ['uid', 'team1', 'team2', 'date_as_dt']

with engine.connect() as conn:
    counter = 0
    for i in tqdm(range(df.shape[0])):
        game_id = df.loc[i, 'uid']
        team_1 = df.loc[i, 'team1']
        team_2 = df.loc[i, 'team2']
        date = df.loc[i, 'date_as_dt']

        stmt = f'''INSERT INTO games (game_id, team_1, team_2, date) VALUES ('{game_id}', '{team_1}', '{team_2}', '{date}')'''
        print(stmt)
        conn.execute(text(stmt))
        counter += 1
        if counter >= 100:
            conn.commit()
            counter = 0
    conn.commit()


# def delete():
#     with engine.connect() as conn:
#         stmt = f'''DELETE FROM games)'''
#         print(stmt)
#         conn.execute(text(stmt))
#         conn.commit()
#
#
# delete()
