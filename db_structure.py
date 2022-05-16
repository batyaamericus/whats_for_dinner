from sqlalchemy import Column, Integer, String, Text
from sqlalchemy.dialects.mysql import ENUM
from sqlalchemy.orm import declarative_base
import config
from collections import namedtuple

# base class for all of our tables
Base = declarative_base()


class Recipe(Base):
    __tablename__ = 'recipes'
    config.db_setup_logger.info(f'creating {__tablename__}')

    # columns
    recipe_id = Column(Integer, primary_key=True)  # TODO to be pulled from end of url?
    recipe_title = Column(String(256))
    author_name = Column(String(256))
    url = Column(Text)
    difficulty_level = Column(ENUM('Easy', 'Medium', 'Hard'))
    prep_time_min = Column(Integer)
    total_cook_time_min = Column(Integer)
    servings = Column(Integer)
    image_url = Column(Text)
    # TODO many to many table for ingredients, category tags
    # TODO one to many table for directions, nutritional facts

    config.db_setup_logger.info(f'{__tablename__} created')
