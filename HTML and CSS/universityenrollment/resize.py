from PIL import Image

img = Image.open("uni.jpeg")
img = img.resize({1920, 1080})
img.save("uni.jpeg")
