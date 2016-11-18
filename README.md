# Angular

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

# Instructions to start with firebase and push notifications

Google's project to add a step to send notifications (or other services).

https://console.firebase.google.com/?pli=1

Show Notifications API KEY in Firebase:

1. Select project.
2. Click in "Settings" (icon) - Locate in up-left part.
3. Project configuration.
4. Select "Cloud Messaging" tab.
5. Copy Server key that looks like this "AIzaSyBHlndxnzF9xFJ..." (not original, only to show)

Select the existing project (if you have created, otherwise we will have to create a) and "Add firebase". 

### Adding Firebase Our Google Account
After adding Firebase our Google account to a project, we will need the following steps.

We are home page, "Add application" take the opportunity, in order to add to our application (notifications settings in this case):

 - If you would like to be included in the package name and SHA1 certificate (to get into this later, but that is required to enter). If we add the name of at least one package, as is the "Add application"

 - The next step is to configure anything, we need to explain how to add google-services.json file instructions are to proceed with the "Continue".

### Obtain SHA KEY in Android Studio (require to receive/send notifications in our apps):

 - Open Android Studio
 - Open Your Project
 - Click on Gradle (From Right Side Panel, you will see Gradle Bar)
 - Click on Refresh (Click on Refresh from Gradle Bar, you will see List Gradle scripts of your Project)
 - Click on Your Project (Your Project Name form List (root))
 - Click on Tasks
 - Click on android
 - Double Click on signingReport (You will get SHA1 and MD5 in Run Bar)
 - Copy/Paste SHA key and add in create app to receive/send push messages

### Add firebase in our Android project:
 - All necesary steps in: https://firebase.google.com/docs/android/setup

### Firebase Cloud Messaging Screens server(FCM):

**Start Panel**
 ![](https://raw.githubusercontent.com/mugan86/angularjs-firebase-push-to-android/master/screens/start.png)

 **New Message**
 ![](https://raw.githubusercontent.com/mugan86/angularjs-firebase-push-to-android/master/screens/add_new_message.png)

 **5 messages limit!!**
 ![](https://raw.githubusercontent.com/mugan86/angularjs-firebase-push-to-android/master/screens/limit_message.png)

**Message success send!!**
 ![](https://raw.githubusercontent.com/mugan86/angularjs-firebase-push-to-android/master/screens/start.png)
