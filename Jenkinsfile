node {
	checkout scm
	
	docker.image('node:16-buster-slim').withRun('-p 3000:3000').inside('-v /tmp:/tmp') {
		stage('Build') {
			sh 'npm install'
		}
		stage('Test') {
			sh './jenkins/scripts/test.sh'
		}
	}
}