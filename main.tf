# Terraform Provider Configuration for Google Cloud
provider "google" {
  
  project     = var.GCP_PROJECT_ID
  region      = var.GCP_REGION
}

# Google Cloud Run Service
resource "google_cloud_run_service" "myprofile" {
  name     = "myprofile-service"
  location = var.GCP_REGION

  template {
    spec {
      containers {
        image = "docker.io/${var.docker_image_name}"  # Docker Hub image name
      }
    }
  }

  traffic {
    percent           = 100
    latest_revision   = true
  }
}

# Enable Cloud Run API
resource "google_project_service" "run" {
  project = var.GCP_PROJECT_ID
  service = "run.googleapis.com"
}

# Enable Container Registry API
resource "google_project_service" "container_registry" {
  project = var.GCP_PROJECT_ID
  service = "containerregistry.googleapis.com"
}

# Output the Cloud Run URL
output "cloud_run_url" {
  value = google_cloud_run_service.myprofile.status[0].url
}

# Variable Declarations
variable "GOOGLE_APPLICATION_CREDENTIALS" {
  description = "Path to the Google Cloud service account JSON key"
  type        = string
}

variable "GCP_PROJECT_ID" {
  description = "Google Cloud project ID"
  type        = string
}

variable "GCP_REGION" {
  description = "Region for deploying resources"
  type        = string
}

variable "docker_image_name" {
  description = "Name of the Docker image to deploy"
  type        = string
}
