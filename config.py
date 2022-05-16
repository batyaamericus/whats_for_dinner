import os
import logging

'''MySQL info - used to communicate with database'''
user_name = os.environ['username']
password = os.environ['password']
host = os.environ['host']

'''database engine needed for sqlalchemy - the link used to establish connection to SQL database'''
engine_url = f'mysql+pymysql://{user_name}:{password}@{host}/comeet_jobs'

'''logging'''
formatter = logging.Formatter('%(asctime)s-%(levelname)s-FUNC:%(funcName)s-LINE:%(lineno)d-%(message)s')
db_setup_logger = logging.getLogger('db_setup')
db_output_file_handler = logging.FileHandler('db_setup.log')
db_output_file_handler.setFormatter(formatter)
db_setup_logger.addHandler(db_output_file_handler)
db_setup_logger.setLevel(logging.INFO)
