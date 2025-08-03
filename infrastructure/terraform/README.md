# Infrastructure as Code (Terraform)

This folder contains Terraform scripts for deploying to Vercel and AWS, and managing DNS.

- **Vercel**: Deploys frontend (Next.js) and sets environment variables.
- **AWS**: Prepares S3 bucket and Route53 DNS zone for future migration.
- **DNS**: Managed via AWS Route53.
- **Environment Variables**: Injected from Terraform variables, can be mapped from .env files.

## Usage

1. Install Terraform CLI.
2. Run `terraform init` in this folder.
3. Run `terraform plan` and `terraform apply` to provision resources.

## Notes
- Replace fake API tokens and secrets with real values in production.
- CI/CD (GitHub Actions) can trigger Terraform on demand.
- Supabase is used for database now; migration to AWS RDS can be scripted later.
