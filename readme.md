# Create a Google Storage Update in NodeJs with AWS S3

Proof of Comcept for use AWS S3 for Nodejs to connect to Google Storage

Prerequisites is to have a Billing Account on Google Cloud Platoform

## Launch

```
npm install
```

Go to [Google Storage Setting](https://console.cloud.google.com/projectselector2/storage/settings) > Interoperability > Create a key for a service account

![](images/GoogleStorageSetting_en.png)

Generate a key id and a secret:

![](images/GoogleStorageSettingSecret_en.png)

Copy the access key and the secret an put it in a file called .env:

```
GOOGLE_KEY_ID =  'GOOG1***'
GOOGLE_SECRET_KEY_ID = 'x5X_***'
BUCKET = 'PROJECTID.appspot.com'
REGION = '<REGION_OF_BUCKET>'
```

At this point launch the program:
```
npm start 
```
