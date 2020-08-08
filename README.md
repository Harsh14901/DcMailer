# DcMailer
This is a facility to handle everything related to mailings for DevClub

POST endpoint to `/email`
```
{
"to" : <recepient email id>,
"subject" : <EMAIL Subject>,
"html": <html body>,
"secret" : <s3cr3t pass code>
}

```
This will send an email to the recipient on behalf of DevClub
