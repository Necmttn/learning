build:
	docker build -t keras .

develop: build
	docker run -it -p 8888:8888 --user root -e GRANT_SUDO=yes -v ~/Projects/keras/src:/home/jovyan/work keras