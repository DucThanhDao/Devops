output "alb_dns_name" {
  description = "DNS name of ALB"
  value       = module.alb.alb_dns_name
}

output "asg_name" {
  description = "Name of ASG"
  value       = module.asg.asg_name
}
