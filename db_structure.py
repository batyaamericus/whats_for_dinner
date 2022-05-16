from sqlalchemy import Column, Integer, String, Text, ForeignKey
from sqlalchemy.dialects.mysql import ENUM
from sqlalchemy.orm import declarative_base, relationship
import config

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
    # TODO many to many table for category tags

    # relationships
    directions = relationship("RecipeDescription", back_populates="recipe", cascade="all, delete-orphan")
    nutrition_facts = relationship("RecipeNutrition", backref="recipe", cascade="all, delete-orphan")
    ingredients = relationship("RecipeIngredients", back_populates="recipe", cascade="all, delete-orphan")
    recipe_cats = relationship("RecipeCategories", back_populates="recipe", cascade="all, delete-orphan")

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


class RecipeNutrition(Base):
    __tablename__ = 'nutrition_facts'
    config.db_setup_logger.info(f'creating {__tablename__}')

    # columns
    nutrition_id = Column(Integer, primary_key=True)
    recipe_id = Column(Integer, ForeignKey('recipes.recipe_id'), nullable=False)
    calories = Column(String(50))
    total_fat = Column(String(50))
    sat_fat = Column(String(50))
    cholesterol = Column(String(50))
    sodium = Column(String(50))
    carbohydrate = Column(String(50))
    fiber = Column(String(50))
    protein = Column(String(50))
    sugar = Column(String(50))

    # relationships
    recipe = relationship("Recipe", back_populates="nutrition_facts")

    # logging
    config.db_setup_logger.info(f'{__tablename__} created')


class RecipeIngredients(Base):
    __tablename__ = 'ingredients'
    config.db_setup_logger.info(f'creating {__tablename__}')

    # columns
    ingredient_id = Column(Integer, primary_key=True)
    recipe_id = Column(Integer, ForeignKey('recipes.recipe_id'), nullable=False)
    ingredient_no = Column(Integer)
    ingredient = Column(String(256))

    # relationships
    recipe = relationship("Recipe", back_populates="ingredients")

    # logging
    config.db_setup_logger.info(f'{__tablename__} created')


class Category(Base):
    __tablename__ = 'categories'
    config.db_setup_logger.info(f'creating {__tablename__}')

    # columns
    category_id = Column(Integer, primary_key=True)
    cat_name = Column(String(50))

    # relationships
    cats_to_recipe = relationship("RecipeCategories", back_populates="category", cascade="all, delete-orphan")

    # logging
    config.db_setup_logger.info(f'{__tablename__} created')


class RecipeCategories(Base):
    __tablename__ = 'recipe_to_category'
    config.db_setup_logger.info(f'creating {__tablename__}')

    # columns
    id = Column(Integer, primary_key=True)
    recipe_id = Column(Integer, ForeignKey('recipes.recipe_id'), nullable=False)
    category_id = Column(Integer, ForeignKey('categories.category_id'), nullable=False)

    # relationships
    recipe = relationship("Recipe", back_populates="recipe_cats")
    category = relationship("Category", back_populates="cats_to_recipe")

    # logging
    config.db_setup_logger.info(f'{__tablename__} created')
