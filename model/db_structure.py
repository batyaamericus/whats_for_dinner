from sqlalchemy import Column, Integer, String, Text, ForeignKey, Date
from sqlalchemy.orm import declarative_base, relationship
import config

# base class for all of our tables
Base = declarative_base()


class Games(Base):
    __tablename__ = 'games'
    config.db_setup_logger.info(f'creating {__tablename__}')

    # columns
    game_id = Column(Integer, primary_key=True)
    team_1 = Column(String(256), nullable=False)
    team_2 = Column(String(256), nullable=False)
    date = Column(Date, nullable=False)

    # relationships
    bets = relationship("Bets", back_populates="games", cascade="all, delete-orphan")

    # logging
    config.db_setup_logger.info(f'{__tablename__} created')


class Bets(Base):
    __tablename__ = 'bets'
    config.db_setup_logger.info(f'creating {__tablename__}')

    # columns
    entry_id = Column(Integer, primary_key=True, )
    game_id = Column(String(256), ForeignKey('games.game_id'), nullable=False)
    teamName = Column(String(256), nullable=False)
    dk_odds = Column(Integer, nullable=False)
    dk_persentage = Column(Integer, nullable=False)
    our_prediction = Column(Integer, nullable=False)

    # relationships
    games = relationship("Games", back_populates="bets")

    # logging
    config.db_setup_logger.info(f'{__tablename__} created')
