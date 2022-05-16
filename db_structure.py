from sqlalchemy import Column, func, Boolean, Integer, String, DateTime, Text, ForeignKey, Enum
from sqlalchemy.dialects.mysql import ENUM
from sqlalchemy.orm import declarative_base, relationship
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
    # TODO one to many table for nutritional facts

    # relationships
    directions = relationship("RecipeDescription", back_populates="recipe", cascade="all, delete-orphan")

    # logging
    config.db_setup_logger.info(f'{__tablename__} created')


class RecipeDirection(Base):
    __tablename__ = 'directions'
    config.db_setup_logger.info(f'creating {__tablename__}')

    # columns
    direction_id = Column(Integer, primary_key=True)
    recipe_id = Column(Integer, ForeignKey('recipes.recipe_id'), nullable=False)
    direction_no = Column(Integer)
    direction = Column(Text)

    # relationships
    recipe = relationship("Recipe", back_populates="directions")

    # logging
    config.db_setup_logger.info(f'{__tablename__} created')
