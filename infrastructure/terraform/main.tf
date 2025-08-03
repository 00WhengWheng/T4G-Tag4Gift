terraform {
  required_providers {
    vercel = {
      source = "vercel/vercel"
      version = ">= 0.5.0"
    }
    aws = {
      source = "hashicorp/aws"
      version = ">= 5.0.0"
    }
  }
}

provider "vercel" {
  api_token = "VERCEL_FAKE_API_TOKEN"
}

provider "aws" {
  region     = "us-east-1"
  access_key = "AWS_FAKE_ACCESS_KEY"
  secret_key = "AWS_FAKE_SECRET_KEY"
}

# Example Vercel project
resource "vercel_project" "frontend" {
  name = "t4g-frontend"
  framework = "nextjs"
}

# Example AWS S3 bucket (for future use)
resource "aws_s3_bucket" "app_bucket" {
  bucket = "t4g-app-bucket"
}

# Example DNS management (using AWS Route53)
resource "aws_route53_zone" "main" {
  name = "example.com"
}

# Example environment variable injection
variable "env_vars" {
  type = map(string)
  default = {
    DATABASE_URL = "postgres://user:pass@supabase-host/db"
    NEXT_PUBLIC_API_URL = "https://api.example.com"
  }
}

# Example Vercel environment variables
resource "vercel_project_environment_variable" "frontend_env" {
  project_id = vercel_project.frontend.id
  key        = "DATABASE_URL"
  value      = var.env_vars["DATABASE_URL"]
  target     = ["production"]
}
