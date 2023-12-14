import jetbrains.buildServer.configs.kotlin.*
import jetbrains.buildServer.configs.kotlin.triggers.vcs

/*
The settings script is an entry point for defining a TeamCity
project hierarchy. The script should contain a single call to the
project() function with a Project instance or an init function as
an argument.

VcsRoots, BuildTypes, Templates, and subprojects can be
registered inside the project using the vcsRoot(), buildType(),
template(), and subProject() methods respectively.

To debug settings scripts in command-line, run the

    mvnDebug org.jetbrains.teamcity:teamcity-configs-maven-plugin:generate

command and attach your debugger to the port 8000.

To debug in IntelliJ Idea, open the 'Maven Projects' tool window (View
-> Tool Windows -> Maven Projects), find the generate task node
(Plugins -> teamcity-configs -> teamcity-configs:generate), the
'Debug' option is available in the context menu for the task.
*/

version = "2023.11"

project {

    buildType(F13099d4b5d5478cA5d87f3b41f3e542_PipelineHead)

    params {
        param("teamcity.projectCredentials.storageType", "credentialsJSON")
    }
}

object F13099d4b5d5478cA5d87f3b41f3e542_PipelineHead : BuildType({
    id("PipelineHead")
    name = "Pipeline Head"

    params {
        param("teamcity.internal.pipelines.isPipelineHead", "true")
    }

    vcs {
        root(DslContext.settingsRoot)
    }

    triggers {
        vcs {
            branchFilter = ""
            enableQueueOptimization = false
        }
    }

    features {
        feature {
            type = "pipeline"
            param("dslVersion", "4")
            param("dsl", """
                name: TC Pipelines Getting Started
                jobs:
                  Job1:
                    name: Build Frontend
                    steps:
                      - type: script
                        script-content: |-
                          echo 'Building Frontend'
                          sleep 10
                          echo 'Done'
                    runs-on: Linux-Medium
                  BuildBackend:
                    name: Build Backend
                    runs-on: Linux-Medium
                    steps:
                      - type: script
                        script-content: |-
                          echo 'Building backend'
                          sleep 10
                          echo 'Done'
                    dependencies:
                      - Job1
            """.trimIndent())
        }
    }
})
