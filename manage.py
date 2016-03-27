import click
import json
from pymongo import MongoClient
from bson.json_util import dumps

@click.group()
def cli():
    pass

# hello world
@cli.command()
@click.option('--count', default=1, help='Number of greetings.')
@click.option('--name', prompt='Your name',
              help='The person to greet.')
def hello(count, name):
    """Simple program that greets NAME for a total of COUNT times."""
    for x in range(count):
        click.echo('Hello %s!' % name)

# seed the db
@cli.command()
@click.argument('fixture', type=click.File('r'))
def loaddata(fixture):
    """
    Import a JSON file into the database, to get started.
    """
    client = MongoClient('localhost', 27017)
    db = client['cars_db']
    collection = db['cars']

    fixture_data = json.loads(fixture.read())
    collection.insert(fixture_data)


# seed the db
@cli.command()
@click.argument('fixture', type=click.File('w'))
def dumpdata(fixture):
    """
    Dump a full copy of the database in JSON format, to the specified file.
    """
    client = MongoClient('localhost', 27017)
    cars = client['cars_db']['cars'].find()

    for c in cars:
        click.echo(c)



# maybe someday migrate to setuptools; for the moment, I don't really care
if __name__ == '__main__':
    cli()