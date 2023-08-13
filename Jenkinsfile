pipeline {
    agent any
    tools {
        nodejs 'nodejs'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
        stage('Build Image') {
            steps {
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-repo', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                        sh 'docker build -t igun/a428-cicd-labs .'
                        sh "echo $PASS | docker login -u $USER --password-stdin"
                        sh 'docker push igun/a428-cicd-labs'
                }
            }
        }
        stage('Manual Approval') { 
            steps {
                input message: 'Lanjutkan ke tahap Deploy? (Klik "Proceed" untuk melanjutkan)' 
            }
        }
        stage('Deploy') { 
            steps {
                script {
                    def pullImage = 'sudo docker pull igun/a428-cicd-labs:latest'
                    def stopDocker = 'sudo docker stop nginx-react-app'
                    def rmDocker = 'sudo docker rm nginx-react-app'
                    def dockerCmd = 'sudo docker run --name nginx-react-app -p 80:80 -d igun/a428-cicd-labs:latest'
                    sshagent(['ec2-server-key']) {
                        sh """
                            ssh -o StrictHostKeyChecking=no ubuntu@52.221.193.119 bash -c "'
                            ${pullImage}
                            ${stopDocker}
                            ${rmDocker}
                            ${dockerCmd}
                            '"
                        """
                    }
                }
                sleep(time:1,unit:"MINUTES") 
            }
        }
    }
}