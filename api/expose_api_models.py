from safrs import SAFRSAPI
import safrs
import importlib
import pathlib
import logging as logging

# use absolute path import for easier multi-{app,model,db} support
database = __import__('database')

app_logger = logging.getLogger(__name__)

app_logger.debug("\napi/expose_api_models.py - endpoint for each table")


def expose_models(api, method_decorators = []): 
    """
        Declare API - on existing SAFRSAPI to expose each model - API automation 
        - Including get (filtering, pagination, related data access) 
        - And post/patch/update (including logic enforcement) 

        Invoked at server startup (api_logic_server_run) 

        You typically do not customize this file 
        - See https://apilogicserver.github.io/Docs/Tutorial/#customize-and-debug 
    """
    api.expose_object(database.models.Dinosaur, method_decorators= method_decorators)
    api.expose_object(database.models.PlayGroup, method_decorators= method_decorators)
    api.expose_object(database.models.DinosaurActivity, method_decorators= method_decorators)
    api.expose_object(database.models.DinosaurAttendance, method_decorators= method_decorators)
    api.expose_object(database.models.PlayGroupSession, method_decorators= method_decorators)
    api.expose_object(database.models.DinosaurMeasurement, method_decorators= method_decorators)
    api.expose_object(database.models.DinosaurSkill, method_decorators= method_decorators)
    api.expose_object(database.models.DinosaurTrainerAssociation, method_decorators= method_decorators)
    api.expose_object(database.models.Trainer, method_decorators= method_decorators)
    api.expose_object(database.models.FeedLog, method_decorators= method_decorators)
    api.expose_object(database.models.PlayGroupFacility, method_decorators= method_decorators)
    api.expose_object(database.models.PlayGroupHost, method_decorators= method_decorators)
    return api
