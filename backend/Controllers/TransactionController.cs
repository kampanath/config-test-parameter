using System;
using System.Linq;
using backend.Models;
using backend.services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Net;
using MailKit.Net.Smtp;
using MailKit;
using MimeKit;

namespace backend.Controllers
{
    
    [ApiController]
    [Route("api/[controller]")]


    
    public class TransactionController : ControllerBase
    {

 
// code in brackets above needed if authentication required 




        [HttpGet("report")]
       [AllowAnonymous]
        public IActionResult GetReport()
        {
            try
            {

         //   ViewData["Message"] = "Your contacct page.";

             var message = new MimeMessage();

             message.From.Add(new MailboxAddress("kampanath","cosineman1@gmail.com"));

             message.To.Add(new MailboxAddress("cosineman","kampanath.kappago@bench.com"));

             message.Subject = " XXXXXXXXXXX";

             message.Body = new TextPart("plain"){
                 Text = "Hi "
             };

             using(var client = new SmtpClient()){
                 client.ServerCertificateValidationCallback = (s,c,h,e) => true;
                 client.Connect("smtp.gmail.com",587,false);
                client.AuthenticationMechanisms.Remove("XOAUTH2");
                 client.Authenticate("cosineman1@gmail.com","15102526");
                 client.Send(message);
                 client.Disconnect(true);
             }

              
                int[] result = new int[7] { 100, 70, 80, 81, 56, 55, 40 };
                return Ok(result);

            }
            catch (Exception error)
            {
                return StatusCode(500, new { result = "", message = error });

            }

        }

    }
}