# Konnex

## Konnex(User friendly UI guide and statistics monitoring system)

- Konnex, a scalable and highly reliable system claims to acts as an guide for all
  users to traverse through the never ending and confusing world of web. Konnex, undoubtedly
  claims to assist various segments of people including differently abled users.
- Konnex internally implements a set of robust and highly scalable architecture and
  provides all the required features/functionalities at the tip of a floating button.
- Konnex also enhances the user experience by providing description related with
  every input field and an automated chat bot system(KonChat) which efficiently utilizes
  ML algorithm in the backend.
- Konnex stores the data required for training the algorithm in the database,
  so as to use it for training the ML algorithm, which indicates that the Konnex
  system will eventually improve itself.
- Besides the architecture of Konnex is designed is such a way that it will benefit, the
  website owners as well. Konnex will provide website oweners with statistical data on a dashboard
  ,which will contribute in business growth as of websites(Businesses).

# Technologies Used
## - Customer-End(Website owners who have registered to avail Konnex service)
    1. React
    2. Antd-Design Library
    
## - Server End
    1. Django Rest API Framework
    2. Machine Learning(NLP)
    3. Python  
    
## - Extension End
    1. Html
    2. Css
    3. Javascript

## Primarly achieved targets Of Konnex

- Helps user in accessing webpages efficiently and easily
- Helps business to achive business figures

## Implemented Functionalities and Future Scope

- **User-End**(end user accessing web page)
   - Currently provided features/functionalities
       1. Floating Button
	   2. Chatting with KonChat(Chat bot create dusing python and ML)
	   3. Reporting a Bug functionality
	   4. Provides Description of every field and also handles the case when field 
	   description in not available.
   - Few features that can be focused upon,
       1. Tab accessibility for Konnex
	   2. Screen reading feature
	   3. Enhancing UI with images and Custom characters like doodles to make it
	    more attractive.
	   4. Can be created for other application like Android/IOS easily as we can
	     are accessing data from REST API
- **Customer-End**(website owners who have registered to avail Konnex service)
  - Currently provided features/functionalities
    1. Statistics of User stay time and bug reporting rate.
    2. Common chat announcement section(can be used to general announcement from konnex)
    3. Chat Support system for customers as well
  - Few features that can be focused upon,
    1. More data could be targeted and displayed in the form of statistical graphs
    2. Additional add-on can be integrated into the dashboard
- **Server End**
  - Currently implemented Features
    1. NLP for chat bot
    2. REST API's
    3. Sqlite Database or storing data
  - Few features that can be focused upon,
    1. ML algorithm can be made more efficient with more training data
    2. Adding more REST API's basd on required features

# Steps for Running Repos,


**Step 1:** git clone "https://github.com/MyAerothonTeam/Konnex.git"

**Step 2:**  REST API's can be accessed using following links,
		-   Url - https://konnexa-api.herokuapp.com/descriptions/
			{
				Field : name of field
				Description : value
			}
			Url - https://konnexa-api.herokuapp.com/reportbug/
			{
				Report: msg
				site_id: domain
				Status : text

			Url - https://konnexa-api.herokuapp.com/chatbot/
			{
				"message": ""
			}
			Url - https://konnexa-api.herokuapp.com/announcements/
			{
				Announcement: “text”
			}
		
		- Running server on localhost
			1. after enabling virtual environment
			2. navigate inside ServerEnd/KonnexApi
			3. run pip3 install -r requirements.txt
			4. run python3 manage.py makemigrations
			5. run python3 manage.py migrate
			6. run python3 manage.py runserver
			
**Step 3:**	Running Customer End
		- cd CustomerEnd
		- yarn 
		- yarn start

**Step 4:** Running Konnex Extension
		1:- Go to Chrome Browser
		2:- On Developer Mode 
		3:- Add Chrome Extension
		4:- Load any site(Preferably open index.html provided in same folder)


**Video Link:** https://drive.google.com/file/d/1iQHaEl5oC5piM8ANzJ72h40mefiMaQ9t
