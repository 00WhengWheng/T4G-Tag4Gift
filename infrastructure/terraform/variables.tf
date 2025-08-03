variable "vercel_api_token" {
  description = "Vercel API token"
  type        = string
  default     = "VERCEL_FAKE_API_TOKEN"
}

variable "aws_access_key" {
  description = "AWS Access Key"
  type        = string
  default     = "AWS_FAKE_ACCESS_KEY"
}

variable "aws_secret_key" {
  description = "AWS Secret Key"
  type        = string
  default     = "AWS_FAKE_SECRET_KEY"
}

variable "domain_name" {
  description = "Root DNS domain name"
  type        = string
  default     = "example.com"
}
