# using resolved_model gpt-4o-2024-08-06# created from response, to create create_db_models.sqlite, with test data
#    that is used to create project
# should run without error in manager 
#    if not, check for decimal, indent, or import issues

import decimal
import logging
import sqlalchemy
from sqlalchemy.sql import func 
from logic_bank.logic_bank import Rule
from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey, Date, DateTime, Numeric, Boolean, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import relationship
from datetime import date   
from datetime import datetime

logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

Base = declarative_base()  # from system/genai/create_db_models_inserts/create_db_models_prefix.py


class Dinosaur(Base):
    __tablename__ = 'dinosaur'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    species = Column(String, nullable=False)
    age = Column(Integer)
    group_id = Column(Integer, ForeignKey('play_group.id'))  # FK to PlayGroup
    
    description: str = "description: Representing a dinosaur with its basic details like name, species, and age."


class PlayGroup(Base):
    __tablename__ = 'play_group'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    location = Column(String, nullable=False)
    group_date = Column(Date, nullable=True)

    description: str = "description: A play group for dinosaurs, including details about the location and meeting date."


class DinosaurActivity(Base):
    __tablename__ = 'dinosaur_activity'

    id = Column(Integer, primary_key=True)
    dinosaur_id = Column(Integer, ForeignKey('dinosaur.id'))  # FK to Dinosaur
    play_group_id = Column(Integer, ForeignKey('play_group.id'))  # FK to PlayGroup
    activity = Column(String, nullable=False)
    duration = Column(Integer)

    description: str = "description: Records an activity participated by a dinosaur within a specific play group, including the duration of the activity."


class FeedLog(Base):
    __tablename__ = 'feed_log'

    id = Column(Integer, primary_key=True)
    dinosaur_id = Column(Integer, ForeignKey('dinosaur.id'))  # FK to Dinosaur
    feed_type = Column(String, nullable=False)
    feed_datetime = Column(DateTime)
    amount_kg = Column(Integer)

    description: str = "description: Logs feeding information for a dinosaur including type of feed, time, and amount in kilograms."


class DinosaurMeasurement(Base):
    __tablename__ = 'dinosaur_measurement'

    id = Column(Integer, primary_key=True)
    dinosaur_id = Column(Integer, ForeignKey('dinosaur.id'))  # FK to Dinosaur
    date_measured = Column(Date)
    weight_kg = Column(Integer, nullable=True)
    height_cm = Column(Integer, nullable=True)

    description: str = "description: Stores measurements of a dinosaur including weight and height recorded on a specific date."


class PlayGroupSession(Base):
    __tablename__ = 'play_group_session'

    id = Column(Integer, primary_key=True)
    play_group_id = Column(Integer, ForeignKey('play_group.id'))  # FK to PlayGroup
    session_date = Column(Date)
    total_dinosaurs = Column(Integer)  # Intermediate sum that should be maintained manually for test data

    description: str = "description: Represents a session for a play group, maintaining a count of all participating dinosaurs."


class PlayGroupHost(Base):
    __tablename__ = 'play_group_host'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    host_since = Column(Date)
    rating = Column(Integer)

    description: str = "description: Hosts for play groups, detailing the name, hosting start date, and a rating."


class DinosaurAttendance(Base):
    __tablename__ = 'dinosaur_attendance'

    id = Column(Integer, primary_key=True)
    play_group_session_id = Column(Integer, ForeignKey('play_group_session.id'))  # FK to PlayGroupSession
    dinosaur_id = Column(Integer, ForeignKey('dinosaur.id'))  # FK to Dinosaur

    description: str = "description: Tracks the attendance of a specific dinosaur during a play group session."


class DinosaurSkill(Base):
    __tablename__ = 'dinosaur_skill'

    id = Column(Integer, primary_key=True)
    dinosaur_id = Column(Integer, ForeignKey('dinosaur.id'))  # FK to Dinosaur
    skill_name = Column(String, nullable=False)
    proficiency_level = Column(Integer)

    description: str = "description: Skills possessed by dinosaurs with a level of proficiency."


class PlayGroupFacility(Base):
    __tablename__ = 'play_group_facility'

    id = Column(Integer, primary_key=True)
    play_group_id = Column(Integer, ForeignKey('play_group.id'))  # FK to PlayGroup
    facility_name = Column(String, nullable=False)
    availability_status = Column(String, nullable=False)

    description: str = "description: Facilities available to play groups, including the current availability status."


class Trainer(Base):
    __tablename__ = 'trainer'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    specialization = Column(String)
    experience_years = Column(Integer)
    associated_play_group_id = Column(Integer, ForeignKey('play_group.id'))

    description: str = "description: Trainers responsible for training dinosaurs, detailing name, specialization, and years of experience."


class DinosaurTrainerAssociation(Base):
    __tablename__ = 'dinosaur_trainer_association'

    id = Column(Integer, primary_key=True)
    dinosaur_id = Column(Integer, ForeignKey('dinosaur.id'))  # FK to Dinosaur
    trainer_id = Column(Integer, ForeignKey('trainer.id'))  # FK to Trainer

    description: str = "description: Links dinosaurs to their trainers, facilitating training tracking."


# ALS/GenAI: Create an SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# ALS/GenAI: Prepare for sample data

from datetime import date, datetime

# PlayGroup test data
play_group_1 = PlayGroup(id=1, name='Jurassic Kids', location='Central Park', group_date=date(2023, 10, 15))
play_group_2 = PlayGroup(id=2, name='Dino Explorers', location='West Field', group_date=date(2023, 10, 16))
play_group_3 = PlayGroup(id=3, name='Dino Fun Squad', location='East Meadow', group_date=date(2023, 10, 17))
play_group_4 = PlayGroup(id=4, name='Cretaceous Adventurers', location='North Plain', group_date=date(2023, 10, 18))

# Dinosaur test data

dinosaur_1 = Dinosaur(id=1, name='Tyra', species='Tyrannosaurus', age=5, group_id=1)
dinosaur_2 = Dinosaur(id=2, name='Trike', species='Triceratops', age=3, group_id=1)
dinosaur_3 = Dinosaur(id=3, name='Brachy', species='Brachiosaurus', age=10, group_id=2)
dinosaur_4 = Dinosaur(id=4, name='Stego', species='Stegosaurus', age=7, group_id=3)

# DinosaurActivity test data
activity_1 = DinosaurActivity(id=1, dinosaur_id=1, play_group_id=1, activity='Running', duration=30)
activity_2 = DinosaurActivity(id=2, dinosaur_id=2, play_group_id=1, activity='Eating', duration=20)
activity_3 = DinosaurActivity(id=3, dinosaur_id=3, play_group_id=2, activity='Sleeping', duration=50)
activity_4 = DinosaurActivity(id=4, dinosaur_id=4, play_group_id=3, activity='Walking', duration=40)

# FeedLog test data
feed_log_1 = FeedLog(id=1, dinosaur_id=1, feed_type='Herbivore mix', feed_datetime=datetime(2023, 10, 10, 10, 0), amount_kg=7)
feed_log_2 = FeedLog(id=2, dinosaur_id=2, feed_type='Carnivore blend', feed_datetime=datetime(2023, 10, 11, 11, 0), amount_kg=8)
feed_log_3 = FeedLog(id=3, dinosaur_id=3, feed_type='Omnivore special', feed_datetime=datetime(2023, 10, 12, 12, 0), amount_kg=12)
feed_log_4 = FeedLog(id=4, dinosaur_id=4, feed_type='Fruity bites', feed_datetime=datetime(2023, 10, 13, 9, 0), amount_kg=5)

# DinosaurMeasurement test data
measurement_1 = DinosaurMeasurement(id=1, dinosaur_id=1, date_measured=date(2023, 10, 5), weight_kg=5000, height_cm=1200)
measurement_2 = DinosaurMeasurement(id=2, dinosaur_id=2, date_measured=date(2023, 10, 6), weight_kg=4200, height_cm=1000)
measurement_3 = DinosaurMeasurement(id=3, dinosaur_id=3, date_measured=date(2023, 10, 7), weight_kg=15000, height_cm=4000)
measurement_4 = DinosaurMeasurement(id=4, dinosaur_id=4, date_measured=date(2023, 10, 8), weight_kg=7000, height_cm=1700)

# PlayGroupSession test data
session_1 = PlayGroupSession(id=1, play_group_id=1, session_date=date(2023, 10, 15), total_dinosaurs=2)
session_2 = PlayGroupSession(id=2, play_group_id=2, session_date=date(2023, 10, 16), total_dinosaurs=1)
session_3 = PlayGroupSession(id=3, play_group_id=3, session_date=date(2023, 10, 17), total_dinosaurs=1)
session_4 = PlayGroupSession(id=4, play_group_id=4, session_date=date(2023, 10, 18), total_dinosaurs=0)

# PlayGroupHost test data
host_1 = PlayGroupHost(id=1, name='John', host_since=date(2023, 1, 1), rating=5)
host_2 = PlayGroupHost(id=2, name='Alice', host_since=date(2023, 2, 1), rating=4)
host_3 = PlayGroupHost(id=3, name='Bob', host_since=date(2023, 3, 1), rating=3)
host_4 = PlayGroupHost(id=4, name='Kate', host_since=date(2023, 4, 1), rating=4)

# DinosaurAttendance test data
attendance_1 = DinosaurAttendance(id=1, play_group_session_id=1, dinosaur_id=1)
attendance_2 = DinosaurAttendance(id=2, play_group_session_id=1, dinosaur_id=2)
attendance_3 = DinosaurAttendance(id=3, play_group_session_id=2, dinosaur_id=3)
attendance_4 = DinosaurAttendance(id=4, play_group_session_id=3, dinosaur_id=4)

# DinosaurSkill test data
skill_1 = DinosaurSkill(id=1, dinosaur_id=1, skill_name='Running fast', proficiency_level=3)
skill_2 = DinosaurSkill(id=2, dinosaur_id=2, skill_name='Defensive posture', proficiency_level=4)
skill_3 = DinosaurSkill(id=3, dinosaur_id=3, skill_name='High reach', proficiency_level=5)
skill_4 = DinosaurSkill(id=4, dinosaur_id=4, skill_name='Camouflage', proficiency_level=2)

# PlayGroupFacility test data
facility_1 = PlayGroupFacility(id=1, play_group_id=1, facility_name='Water Pool', availability_status='Available')
facility_2 = PlayGroupFacility(id=2, play_group_id=2, facility_name='Sand Pit', availability_status='Under Maintenance')
facility_3 = PlayGroupFacility(id=3, play_group_id=3, facility_name='Obstacle Course', availability_status='Available')
facility_4 = PlayGroupFacility(id=4, play_group_id=4, facility_name='Forest Trek', availability_status='Closed')

# Trainer test data
trainer_1 = Trainer(id=1, name='Max', specialization='Fast Movement', experience_years=10, associated_play_group_id=1)
trainer_2 = Trainer(id=2, name='Lucy', specialization='Strength', experience_years=5, associated_play_group_id=2)
trainer_3 = Trainer(id=3, name='Sam', specialization='Dexterity', experience_years=8, associated_play_group_id=3)
trainer_4 = Trainer(id=4, name='Nina', specialization='Endurance', experience_years=6, associated_play_group_id=4)

# DinosaurTrainerAssociation test data
association_1 = DinosaurTrainerAssociation(id=1, dinosaur_id=1, trainer_id=1)
association_2 = DinosaurTrainerAssociation(id=2, dinosaur_id=2, trainer_id=2)
association_3 = DinosaurTrainerAssociation(id=3, dinosaur_id=3, trainer_id=3)
association_4 = DinosaurTrainerAssociation(id=4, dinosaur_id=4, trainer_id=4)



session.add_all([play_group_1, play_group_2, play_group_3, play_group_4, dinosaur_1, dinosaur_2, dinosaur_3, dinosaur_4, activity_1, activity_2, activity_3, activity_4, feed_log_1, feed_log_2, feed_log_3, feed_log_4, measurement_1, measurement_2, measurement_3, measurement_4, host_1, host_2, host_3, host_4, attendance_1, attendance_2, attendance_3, attendance_4, skill_1, skill_2, skill_3, skill_4, facility_1, facility_2, facility_3, facility_4, trainer_1, trainer_2, trainer_3, trainer_4, association_1, association_2, association_3, association_4])
session.commit()
