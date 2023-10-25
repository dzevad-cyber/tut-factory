du:
	docker-compose -f docker-compose.dev.yml up -d && \
	docker logs -f tut-factory-container

dd:
	docker-compose -f docker-compose.dev.yml down --remove-orphans 

ddv:
	docker-compose -f docker-compose.dev.yml down --remove-orphans -v

db: 
	docker image rm -f tut-factory-client && docker-compose -f docker-compose.dev.yml up --build

drm: 
	docker image rm -f tut-factory-client