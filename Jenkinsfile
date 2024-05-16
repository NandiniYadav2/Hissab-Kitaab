pipeline {
    environment{
        DOCKERHUB_CREDENTIALS = credentials('DockerHubCred')
        MYSQL_CREDENTIALS = credentials('mysqlCred')
        DOCKERHUB_USER = 'aparajita104'
    }
    agent any
    stages {
        stage('Clone repository') {
            steps {
                git branch: 'main', url: 'https://github.com/kumaparajita104/Hisaab-Kitaab-SPE'
            }
        }
        stage('Maven Build Backend'){
            steps{
                echo 'Building Job'
                sh 'cd Hissab-Kitaab-backend; mvn clean install';
                sh 'mv -f SplitwiseRegistryService/target/SplitwiseRegistryService-0.0.1-SNAPSHOT.jar JarFiles/';
            }
        }
        stage('Build Image for Microservices'){
            steps{
                echo 'Building docker Image'
                sh "docker build -t $DOCKERHUB_USER/splitwise:eurekaregistry -f DockerFiles/RegistryDockerfile .";
                sh "cd splitwisefrontend; docker build -t ${DOCKERHUB_USER}/splitwise:splitwisefrontend .";   
            }
        }
    
        stage('Login into docker hub'){
            steps{
                echo 'Login into docker hub'
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin';
            }
        }
        stage('Push Image to DockerHub'){
            steps{
                echo 'Pushing Images into DockerHub'
                sh 'docker push $DOCKERHUB_USER/splitwise:eurekaregistry';
                sh 'docker push $DOCKERHUB_USER/splitwise:apigateway';
                sh 'docker push $DOCKERHUB_USER/splitwise:userservice';
    	        sh 'docker push $DOCKERHUB_USER/splitwise:expenseservice';
    	        sh 'docker push $DOCKERHUB_USER/splitwise:splitwisefrontend';
            }
        }
        stage('Delete Image from localsystem'){
            steps{
                echo 'Deleting Docker Image in docker'
                sh 'docker rmi $DOCKERHUB_USER/splitwise:eurekaregistry';
                sh 'docker rmi $DOCKERHUB_USER/splitwise:apigateway';
                sh 'docker rmi $DOCKERHUB_USER/splitwise:userservice';
                sh 'docker rmi $DOCKERHUB_USER/splitwise:expenseservice';
                sh 'docker rmi $DOCKERHUB_USER/splitwise:splitwisefrontend';
            }
        }
        stage('Run ansible playbook'){
            steps{
                echo 'Running the ansible playbook yml file'
                sh 'export LC_ALL=en_IN.UTF-8;export LANG=en_US.UTF-8;ansible-playbook -i inventory_shashi playbook.yml'
            }
        }
    }
}
