FROM jupyter/all-spark-notebook
MAINTAINER elric "elrichxu@gmail.com"
USER root
RUN apt-get update -y \
    && apt-get upgrade -y \
    && apt-get install -y python3-dev python3-pip python3-nose gcc g++ git gfortran vim  \
    && apt-get install -y libopenblas-dev liblapack-dev libatlas-base-dev
RUN sudo -H pip3 install -U --pre pip setuptools wheel  \
    && sudo -H pip3 install -U --pre numpy scipy matplotlib scikit-learn scikit-image  \
    && sudo -H pip3 install -U --pre keras  \
    && conda install -c conda-forge tensorflow keras
RUN sudo -H pip3 install -U requests