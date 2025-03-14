from django.shortcuts import render


def index(request):
    return render(request, 'main/index.html')

# def about(request):
#     return render(request, 'main/about.html')

# def courses(request):
#     return render(request, 'main/courses.html')

# def tutors(request):
#     return render(request, 'main/tutors.html')

# def contact(request):
#     return render(request, 'main/contact.html')