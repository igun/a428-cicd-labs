node {
    docker.image('node:16-buster-slim').inside('-p 3000:3000 -v $HOME/dicoding/a428-cicd-labs:/root/a428-cicd-labs') {
        stage('Build') {
            sh 'cd /root/a428-cicd-labs'
            sh 'npm install'
        }
    }
}