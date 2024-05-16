pipeline {
    environment{
        DOCKERHUB_CREDENTIALS = credentials('DockerHubCred')
        MYSQL_CREDENTIALS = credentials('mysqlCred')
        MYSQL_CREDENTIALS_USR = credentials('MYSQL_CREDENTIALS_USR')
        MYSQL_CREDENTIALS_PSW = credentials('MYSQL_CREDENTIALS_PSW')
        DOCKERHUB_USER = 'aparajita104'
    }
    agent any
    stages {
        stage('Clone repository') {
            steps {
                git branch: 'main', url: 'https://github.com/kumaparajita104/Hisaab-Kitaab-SPE'
            }
        }
    tools {
        maven 'Maven3' // Name as configured in Global Tool Configuration
    }
        stage('Maven Build Backend'){
            steps{
                echo 'Building Job'
                sh 'cd Hissab-Kitaab-backend; mvn clean install -DSPRING_DATASOURCE_USERNAME=${MYSQL_CREDENTIALS_USR} -DSPRING_DATASOURCE_PASSWORD=${MYSQL_CREDENTIALS_PSW}';
                sh 'mv -f Hisaab-Kitaab-backend/target/Hissab-Kitaab-0.0.1-SNAPSHOT.jar JarFiles/';
            }
        }
        stage('Build Image for Microservices'){
            steps{
                echo 'Building docker Image'
                sh "cd Hissab-Kitaab-backend; docker build -t ${DOCKERHUB_USER}/hissab:backend .";
                sh "cd hisaabKitabFrontEnd; docker build -t ${DOCKERHUB_USER}/hissab:frontend .";   
            }
        }
    
        stage('Push Image to DockerHub'){
            steps{
                script
                {
                    docker.withRegistry('', 'DockerHubCred')
                    {
                    echo 'Pushing Images into DockerHub'
    	            sh 'docker push ${DOCKERHUB_USER}/hissab:backend';
    	            sh 'docker push ${DOCKERHUB_USER}/hissab:frontend';
                    }
                }
            }
        }
        stage('Delete Image from localsystem'){
            steps{
                echo 'Deleting Docker Image in docker'
                sh 'docker rmi ${DOCKERHUB_USER}/hissab:backend';
                sh 'docker rmi ${DOCKERHUB_USER}/hissab:frontend';
            }
        }
        stage('Run ansible playbook'){
            steps{
                echo 'Running the ansible playbook yml file'
                sh 'export LC_ALL=en_IN.UTF-8;export LANG=en_US.UTF-8;ansible-playbook -i inventory playbook.yml'
            }
        }
    }
}
