FROM amazoncorretto:11-alpine-jdk
MAINTAINER JDP
COPY target/jdp-0.0.1-SNAPSHOT.jar  jdpdeploy.jar
ENTRYPOINT ["java","-jar","/jdpdeploy.jar"]