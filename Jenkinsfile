pipeline {
    agent any 
    stages {
        stage('Clone the repo') {
            steps {
                echo 'clone the repo'
                sh 'rm -fr Riki'
                sh 'git clone https://github.com/psnajdarche/Riki.git'
            }
        }
         stage('Tetsing') {
            steps {
                echo 'Tetsting the last version' 
               
            }
        }
         stage('Stage 3') {
            steps {
                echo 'Promena na gittu!' 
            }
        }
    }
}
