# -*- coding: utf-8 -*-
"""
Created on Tue Aug 22 17:10:26 2017

@author: Gopi
"""

import requests

class mashape_client:
	mashape_key=None

	def __init__(self,mashape_key):
		self.mashape_key=mashape_key
	def transform(img,transformations):
		return img