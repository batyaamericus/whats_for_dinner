from sqlalchemy_utils import create_database
from sqlalchemy_utils import database_exists
from sqlalchemy import create_engine
import config
import db_structure


engine = create_engine(config.engine_url, future=True)


def create_db():
    """
    creating a database according to the configurations defined in config.py if the database does not already exist
    """
    if not database_exists(config.engine_url):
        config.db_setup_logger.info('database did not exist, creating it')
        create_database(config.engine_url)
    config.db_setup_logger.info('database exists, no action taken')


def create_tables():
    """
    creates the tables in our database according to the details found in db_structure
    """
    db_structure.Base.metadata.create_all(engine, checkfirst=True)


create_tables()
