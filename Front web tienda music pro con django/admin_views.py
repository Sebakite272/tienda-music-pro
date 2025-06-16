from django.contrib.admin.views.decorators import staff_member_required
from django.shortcuts import render

def index(request):
    return render (request, 'admin/tienda_index.html')
