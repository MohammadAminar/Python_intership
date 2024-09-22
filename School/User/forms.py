from django import forms


class UserModel(forms.Form):
    def __init__(self, *args, **kwargs):
        super(UserModel, self).__init__(*args, **kwargs)
        for item in UserModel.visible_fields(self):
            item.field.widget.attrs['class'] = 'form-control'

    Firstname = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'امین'}),
                                max_length=50,
                                required=True,
                                label='نام')
    Lastname = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'عرب پور',}),
                               max_length=50,
                               required=True,
                               label='نام خانوادگی')
    International_Code = forms.CharField(widget=forms.NumberInput,
                                        required=True,
                                        label='کد ملی',
                                        error_messages={'Error': 'کد ملی نامعتبر است'})
    Phone = forms.CharField(widget=forms.NumberInput,
                            max_length=11,
                            required=True,
                            label='شماره تلفن',
                            error_messages={'Error': 'شماره تلفن معتبر نیست'})
    Username = forms.CharField(widget=forms.TextInput,
                               max_length=50,
                               required=True,
                               label='نام کاربری',
                               error_messages={'Error': 'نام کاربری را صحیح وارد کنید'})
    Password = forms.CharField(widget=forms.PasswordInput,
                               max_length=50,
                               required=True,
                               min_length=8,
                               label='رمز عبور',
                               error_messages={'Error': 'رمز عبور کوتاه است'})
    User_Id = forms.CharField(widget=forms.HiddenInput, required=True, initial=0, label='')


class TeacherModel(forms.Form):
    def __init__(self, *args, **kwargs):
        super(TeacherModel, self).__init__(*args, **kwargs)
        for item in TeacherModel.visible_fields(self):
            item.field.widget.attrs['class'] = 'form-control'

    CHOICES = [
        ('True', 'بله'),
        ('False', 'خیر'),
    ]
    Firstname = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'امین'}),
                                max_length=50,
                                required=True,
                                label='نام')
    Lastname = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'عرب پور',}),
                               max_length=50,
                               required=True,
                               label='نام خانوادگی')
    International_Code = forms.CharField(widget=forms.NumberInput,
                                        required=True,
                                        label='کد ملی',
                                        error_messages={'Error': 'کد ملی نامعتبر است'})
    Phone = forms.CharField(widget=forms.NumberInput,
                            max_length=11,
                            required=True,
                            label='شماره تلفن',
                            error_messages={'Error': 'شماره تلفن معتبر نیست'})
    Username = forms.CharField(widget=forms.TextInput,
                               max_length=50,
                               required=True,
                               label='نام کاربری',
                               error_messages={'Error': 'نام کاربری را صحیح وارد کنید'})
    Password = forms.CharField(widget=forms.PasswordInput,
                               max_length=50,
                               required=True,
                               min_length=8,
                               label='رمز عبور',
                               error_messages={'Error': 'رمز عبور کوتاه است'})
    Code_vezarat_olom = forms.CharField(widget=forms.NumberInput,
                                        max_length=10,
                                        required=True,
                                        label='کد وزارت علوم',
                                        error_messages={'Error': 'کد وزارت علوم نامعتبر است'})

    Work_experience = forms.ChoiceField(label='تجربه کاری',
                                        required=True,
                                        choices=CHOICES)
    Education = forms.CharField(widget=forms.TextInput,
                                max_length=50,
                                required=True,
                                label='تحصیلات')
    Teacher_Id = forms.CharField(widget=forms.HiddenInput, required=True, initial=0, label='')


class StudentModel(forms.Form):
    def __init__(self, *args, **kwargs):
        super(StudentModel, self).__init__(*args, **kwargs)
        for item in StudentModel.visible_fields(self):
            item.field.widget.attrs['class'] = 'form-control'

    Student_Id = forms.CharField(widget=forms.HiddenInput, required=True, initial=0, label='')
    Firstname = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'امین'}),
                                max_length=50,
                                required=True,
                                label='نام')
    Lastname = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'عرب پور'}),
                               max_length=50,
                               required=True,
                               label='نام خانوادگی')
    International_Code = forms.CharField(widget=forms.NumberInput,
                                         max_length=10,
                                         required=True,
                                         label='کد ملی',
                                         error_messages={'Error': 'کد ملی نامعتبر است'})
    Phone = forms.CharField(widget=forms.NumberInput(attrs={'placeholder': '09*********'}),
                            max_length=11,
                            required=True,
                            label='شماره تلفن',
                            error_messages={'Error': 'شماره تلفن معتبر نیست'})
    Username = forms.CharField(widget=forms.TextInput,
                               max_length=50,
                               required=True,
                               label='نام کاربری',
                               error_messages={'Error': 'نام کاربری را صحیح وارد کنید'})
    Password = forms.CharField(widget=forms.PasswordInput,
                               max_length=50,
                               required=True,
                               min_length=8,
                               label='رمز عبور',
                               error_messages={'Error': 'رمز عبور کوتاه است'})
    Education_level = forms.CharField(widget=forms.TextInput,
                                      label='سطح تحصیلات',
                                      max_length=50,
                                      required=True,
                                      error_messages={'required': 'لطفا سطح تحصیلات را وارد کنید'})
    
    DEBT_STATUS_CHOICES = [
        ('SUSPENDED', 'معلق شده'),
        ('PAID', 'پرداخت شده'),
        ('UNPAID', 'پرداخت نشده'),
    ]

    Debt_status = forms.ChoiceField(label='وضعیت بدهی', choices=DEBT_STATUS_CHOICES)


class ParentModel(forms.Form):
    def __init__(self, *args, **kwargs):
        super(ParentModel, self).__init__(*args, **kwargs)
        for item in ParentModel.visible_fields(self):
            item.field.widget.attrs['class'] = 'form-control'

    Parent_Id = forms.CharField(widget=forms.HiddenInput, required=True, initial=0, label='')
    Firstname = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'امین'}),
                                max_length=50,
                                required=True,
                                label='نام')
    Lastname = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'عرب پور'}),
                               max_length=50,
                               required=True,
                               label='نام خانوادگی')
    International_Code = forms.CharField(widget=forms.TextInput,
                                         max_length=10,
                                         required=True,
                                         label='کد ملی',
                                         error_messages={'Error': 'کد ملی نامعتبر است'})
    Phone = forms.CharField(widget=forms.NumberInput(attrs={'placeholder': '09*********'}),
                            max_length=11,
                            required=True,
                            label='شماره تلفن',
                            error_messages={'Error': 'شماره تلفن معتبر نیست'})
    Username = forms.CharField(widget=forms.TextInput,
                               max_length=50,
                               required=True,
                               label='نام کاربری',
                               error_messages={'Error': 'نام کاربری را صحیح وارد کنید'})
    Password = forms.CharField(widget=forms.PasswordInput,
                               max_length=50,
                               required=True,
                               min_length=8,
                               label='رمز عبور',
                               error_messages={'Error': 'رمز عبور کوتاه است'})
    Number_of_children = forms.IntegerField(label='تعداد فرزندان در این مدرسه',
                                            required=True)


class ManagerModel(forms.Form):
    def __init__(self, *args, **kwargs):
        super(ManagerModel, self).__init__(*args, **kwargs)
        for item in ManagerModel.visible_fields(self):
            item.field.widget.attrs['class'] = 'form-control'

    Manager_Id = forms.CharField(widget=forms.HiddenInput, required=True, initial=0, label='')
    Firstname = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'امین'}),
                                max_length=50,
                                required=True,
                                label='نام')
    Lastname = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'عرب پور'}),
                               max_length=50,
                               required=True,
                               label='نام خانوادگی')
    International_Code = forms.CharField(widget=forms.NumberInput,
                                         max_length=10,
                                         required=True,
                                         label='کد ملی',
                                         error_messages={'Error': 'کد ملی نامعتبر است'})
    Phone = forms.CharField(widget=forms.NumberInput(attrs={'placeholder': '09*********'}),
                            max_length=11,
                            required=True,
                            label='شماره تلفن',
                            error_messages={'Error': 'شماره تلفن معتبر نیست'})
    Username = forms.CharField(widget=forms.TextInput,
                               max_length=50,
                               required=True,
                               label='نام کاربری',
                               error_messages={'Error': 'نام کاربری را صحیح وارد کنید'})
    Password = forms.CharField(widget=forms.PasswordInput,
                               max_length=50,
                               required=True,
                               min_length=8,
                               label='رمز عبور',
                               error_messages={'Error': 'رمز عبور کوتاه است'})
