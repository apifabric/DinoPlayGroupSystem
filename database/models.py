# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, Date, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  November 22, 2024 21:39:31
# Database: sqlite:////tmp/tmp.LLf8g7TlOy-01JDAWYXBJ8281T8S1V2DWB8KW/DinoPlayGroupSystem/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class PlayGroup(SAFRSBaseX, Base):
    __tablename__ = 'play_group'
    _s_collection_name = 'PlayGroup'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    location = Column(String, nullable=False)
    group_date = Column(Date)

    # parent relationships (access parent)

    # child relationships (access children)
    DinosaurList : Mapped[List["Dinosaur"]] = relationship(back_populates="group")
    PlayGroupFacilityList : Mapped[List["PlayGroupFacility"]] = relationship(back_populates="play_group")
    PlayGroupSessionList : Mapped[List["PlayGroupSession"]] = relationship(back_populates="play_group")
    TrainerList : Mapped[List["Trainer"]] = relationship(back_populates="associated_play_group")
    DinosaurActivityList : Mapped[List["DinosaurActivity"]] = relationship(back_populates="play_group")



class PlayGroupHost(SAFRSBaseX, Base):
    __tablename__ = 'play_group_host'
    _s_collection_name = 'PlayGroupHost'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    host_since = Column(Date)
    rating = Column(Integer)

    # parent relationships (access parent)

    # child relationships (access children)



class Dinosaur(SAFRSBaseX, Base):
    __tablename__ = 'dinosaur'
    _s_collection_name = 'Dinosaur'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    species = Column(String, nullable=False)
    age = Column(Integer)
    group_id = Column(ForeignKey('play_group.id'))

    # parent relationships (access parent)
    group : Mapped["PlayGroup"] = relationship(back_populates=("DinosaurList"))

    # child relationships (access children)
    DinosaurActivityList : Mapped[List["DinosaurActivity"]] = relationship(back_populates="dinosaur")
    DinosaurAttendanceList : Mapped[List["DinosaurAttendance"]] = relationship(back_populates="dinosaur")
    DinosaurMeasurementList : Mapped[List["DinosaurMeasurement"]] = relationship(back_populates="dinosaur")
    DinosaurSkillList : Mapped[List["DinosaurSkill"]] = relationship(back_populates="dinosaur")
    DinosaurTrainerAssociationList : Mapped[List["DinosaurTrainerAssociation"]] = relationship(back_populates="dinosaur")
    FeedLogList : Mapped[List["FeedLog"]] = relationship(back_populates="dinosaur")



class PlayGroupFacility(SAFRSBaseX, Base):
    __tablename__ = 'play_group_facility'
    _s_collection_name = 'PlayGroupFacility'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    play_group_id = Column(ForeignKey('play_group.id'))
    facility_name = Column(String, nullable=False)
    availability_status = Column(String, nullable=False)

    # parent relationships (access parent)
    play_group : Mapped["PlayGroup"] = relationship(back_populates=("PlayGroupFacilityList"))

    # child relationships (access children)



class PlayGroupSession(SAFRSBaseX, Base):
    __tablename__ = 'play_group_session'
    _s_collection_name = 'PlayGroupSession'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    play_group_id = Column(ForeignKey('play_group.id'))
    session_date = Column(Date)
    total_dinosaurs = Column(Integer)

    # parent relationships (access parent)
    play_group : Mapped["PlayGroup"] = relationship(back_populates=("PlayGroupSessionList"))

    # child relationships (access children)
    DinosaurAttendanceList : Mapped[List["DinosaurAttendance"]] = relationship(back_populates="play_group_session")



class Trainer(SAFRSBaseX, Base):
    __tablename__ = 'trainer'
    _s_collection_name = 'Trainer'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    specialization = Column(String)
    experience_years = Column(Integer)
    associated_play_group_id = Column(ForeignKey('play_group.id'))

    # parent relationships (access parent)
    associated_play_group : Mapped["PlayGroup"] = relationship(back_populates=("TrainerList"))

    # child relationships (access children)
    DinosaurTrainerAssociationList : Mapped[List["DinosaurTrainerAssociation"]] = relationship(back_populates="trainer")



class DinosaurActivity(SAFRSBaseX, Base):
    __tablename__ = 'dinosaur_activity'
    _s_collection_name = 'DinosaurActivity'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    dinosaur_id = Column(ForeignKey('dinosaur.id'))
    play_group_id = Column(ForeignKey('play_group.id'))
    activity = Column(String, nullable=False)
    duration = Column(Integer)

    # parent relationships (access parent)
    dinosaur : Mapped["Dinosaur"] = relationship(back_populates=("DinosaurActivityList"))
    play_group : Mapped["PlayGroup"] = relationship(back_populates=("DinosaurActivityList"))

    # child relationships (access children)



class DinosaurAttendance(SAFRSBaseX, Base):
    __tablename__ = 'dinosaur_attendance'
    _s_collection_name = 'DinosaurAttendance'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    play_group_session_id = Column(ForeignKey('play_group_session.id'))
    dinosaur_id = Column(ForeignKey('dinosaur.id'))

    # parent relationships (access parent)
    dinosaur : Mapped["Dinosaur"] = relationship(back_populates=("DinosaurAttendanceList"))
    play_group_session : Mapped["PlayGroupSession"] = relationship(back_populates=("DinosaurAttendanceList"))

    # child relationships (access children)



class DinosaurMeasurement(SAFRSBaseX, Base):
    __tablename__ = 'dinosaur_measurement'
    _s_collection_name = 'DinosaurMeasurement'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    dinosaur_id = Column(ForeignKey('dinosaur.id'))
    date_measured = Column(Date)
    weight_kg = Column(Integer)
    height_cm = Column(Integer)

    # parent relationships (access parent)
    dinosaur : Mapped["Dinosaur"] = relationship(back_populates=("DinosaurMeasurementList"))

    # child relationships (access children)



class DinosaurSkill(SAFRSBaseX, Base):
    __tablename__ = 'dinosaur_skill'
    _s_collection_name = 'DinosaurSkill'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    dinosaur_id = Column(ForeignKey('dinosaur.id'))
    skill_name = Column(String, nullable=False)
    proficiency_level = Column(Integer)

    # parent relationships (access parent)
    dinosaur : Mapped["Dinosaur"] = relationship(back_populates=("DinosaurSkillList"))

    # child relationships (access children)



class DinosaurTrainerAssociation(SAFRSBaseX, Base):
    __tablename__ = 'dinosaur_trainer_association'
    _s_collection_name = 'DinosaurTrainerAssociation'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    dinosaur_id = Column(ForeignKey('dinosaur.id'))
    trainer_id = Column(ForeignKey('trainer.id'))

    # parent relationships (access parent)
    dinosaur : Mapped["Dinosaur"] = relationship(back_populates=("DinosaurTrainerAssociationList"))
    trainer : Mapped["Trainer"] = relationship(back_populates=("DinosaurTrainerAssociationList"))

    # child relationships (access children)



class FeedLog(SAFRSBaseX, Base):
    __tablename__ = 'feed_log'
    _s_collection_name = 'FeedLog'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    dinosaur_id = Column(ForeignKey('dinosaur.id'))
    feed_type = Column(String, nullable=False)
    feed_datetime = Column(DateTime)
    amount_kg = Column(Integer)

    # parent relationships (access parent)
    dinosaur : Mapped["Dinosaur"] = relationship(back_populates=("FeedLogList"))

    # child relationships (access children)
