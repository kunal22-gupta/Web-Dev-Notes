## There are three ways to add javascript in our website.

### 1. Inline javascript
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body onload="alert('This is an example of inline javascript.');">
	<h1>Hey, I am Kunal.</h1>
</body>
</html>
```
### 2. Internal javascript
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>  
	<h1>Hey, I am Kunal.</h1>
	<script>
		alert("This is an example of internal javascript");
	</script>
</body>
</html>
```

### 3. External javascript
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>  
	<h1>Hey, I am Kunal.</h1>
	<script src="index.js"></script> //add the path for your javascript file in the src attribute.
</body>
</html>
```

## Things to keep in mind

- Though you can add javascript in the head tag but it's always recommended to add your javascript file in the end of the body tag.
- Avoid inline javascript as it is hard to debug.
- Use external javascript as it is more sorted and easy to debug. 