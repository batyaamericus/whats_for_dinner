import pandas as pd
from sqlalchemy import create_engine
from sqlalchemy import text
import config
from tqdm.auto import tqdm


df = pd.read_csv('x_test_preds.csv')
engine = create_engine(config.engine_url, future=True)

""" entry_id       | char(36)     | NO   | PRI | uuid()  | DEFAULT_GENERATED |
| game_id        | char(36)     | YES  | MUL | NULL    |                   |
| teamName       | varchar(255) | NO   |     | NULL    |                   |
| dk_odds        | int          | NO   |     | NULL    |                   |
| dk_persentage  | int          | NO   |     | NULL    |                   |
| our_prediction"""

with engine.connect() as conn:
    counter = 0
    for i in tqdm(range(df.shape[0])):
        game_id = df.loc[i, 'uid']
        teamName = df.loc[i, 'team1']
        dk_odds = df.loc[i, 'ML_odds1']
        dk_persentage = df.loc[i, 'Prob_odds1']
        our_prediction = df.loc[i, 'prob1'] * 100

        stmt = f'''INSERT INTO bets (game_id, teamName, dk_odds, dk_persentage, our_prediction) VALUES 
        ('{game_id}', '{teamName}', '{dk_odds}', '{dk_persentage}', '{our_prediction}')'''
        print(stmt)
        conn.execute(text(stmt))
        counter += 1
        if counter >= 100:
            conn.commit()
            counter = 0
    conn.commit()
